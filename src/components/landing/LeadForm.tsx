import { useState, type FormEvent, type ReactNode } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Check, LoaderCircle } from "lucide-react";
import { serviceNeeds } from "@/data/content";
import { submitLead } from "@/lib/leads/submit";
import { leadSchema, type LeadInput } from "@/lib/leads/schema";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { CallCta } from "./Cta";

const empty: LeadInput = {
  name: "",
  email: "",
  phone: "",
  address: "",
  service: "inspection",
  message: "",
};

type FieldErrors = Partial<Record<keyof LeadInput, string>>;

export function LeadForm() {
  const [form, setForm] = useState<LeadInput>(empty);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle",
  );
  const [serverError, setServerError] = useState<string | null>(null);
  const reduce = useReducedMotion();

  function update<K extends keyof LeadInput>(key: K, value: LeadInput[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const parsed = leadSchema.safeParse(form);
    if (!parsed.success) {
      const next: FieldErrors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0];
        if (typeof key === "string" && !next[key as keyof LeadInput]) {
          next[key as keyof LeadInput] = issue.message;
        }
      }
      setErrors(next);
      return;
    }

    setStatus("submitting");
    setServerError(null);
    try {
      const result = await submitLead({ data: parsed.data });
      if (!result.ok) {
        setStatus("error");
        setServerError(result.error);
        return;
      }
      setStatus("success");
    } catch {
      setStatus("error");
      setServerError("Something went wrong sending your request. Please call us.");
    }
  }

  return (
    <div className="rounded-card bg-surface p-5 shadow-[var(--shadow-lift)] sm:p-7">
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex min-h-80 flex-col items-start justify-center py-6"
          >
            <span className="grid size-12 place-items-center rounded-full bg-success text-paper">
              <Check className="size-6" strokeWidth={2.2} />
            </span>
            <h3 className="mt-6 text-2xl font-medium tracking-tight">
              Inspection request received
            </h3>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
              Thanks — your request has been sent to the StormShield Roofing
              team. We'll contact you shortly to discuss your roof.
            </p>
            <div className="mt-6">
              <CallCta variant="secondary" />
            </div>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={onSubmit}
            noValidate
            initial={false}
            className="flex flex-col gap-4"
          >
            <div>
              <h3 className="text-xl font-medium tracking-tight">
                Request a free inspection
              </h3>
              <p className="mt-1 text-sm text-muted">
                We'll use this to reach you about the visit.
              </p>
            </div>

            <Field label="Full name" error={errors.name}>
              <input
                id="lead-name"
                name="name"
                autoComplete="name"
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                className={inputClass(errors.name)}
              />
            </Field>

            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Email" error={errors.email}>
                <input
                  id="lead-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  inputMode="email"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  className={inputClass(errors.email)}
                />
              </Field>
              <Field label="Phone number" error={errors.phone}>
                <input
                  id="lead-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  inputMode="tel"
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  className={inputClass(errors.phone)}
                />
              </Field>
            </div>

            <Field label="Property address" error={errors.address}>
              <input
                id="lead-address"
                name="address"
                autoComplete="street-address"
                value={form.address}
                onChange={(e) => update("address", e.target.value)}
                className={inputClass(errors.address)}
              />
            </Field>

            <fieldset>
              <legend className="mb-2 text-sm font-medium">
                What do you need help with?
              </legend>
              <div className="flex flex-wrap gap-2">
                {serviceNeeds.map((need) => {
                  const selected = form.service === need.value;
                  return (
                    <button
                      key={need.value}
                      type="button"
                      onClick={() => update("service", need.value)}
                      className={cn(
                        "h-10 rounded-full px-3.5 text-sm transition-colors",
                        selected
                          ? "bg-primary text-primary-fg"
                          : "bg-surface-2 text-ink hover:bg-line",
                      )}
                      aria-pressed={selected}
                    >
                      {need.label}
                    </button>
                  );
                })}
              </div>
            </fieldset>

            <Field label="Message (optional)" error={errors.message}>
              <textarea
                id="lead-message"
                name="message"
                rows={4}
                value={form.message}
                onChange={(e) => update("message", e.target.value)}
                className={cn(inputClass(errors.message), "min-h-24 resize-y py-3")}
                placeholder="Leak location, recent storm, age of the roof — whatever helps."
              />
            </Field>

            {serverError ? (
              <p className="text-sm text-danger" role="alert">
                {serverError}
              </p>
            ) : null}

            <Button
              type="submit"
              size="lg"
              className="w-full"
              disabled={status === "submitting"}
            >
              {status === "submitting" ? (
                <>
                  <LoaderCircle className="size-4 animate-spin" />
                  Sending request
                </>
              ) : (
                "Request my free roof inspection"
              )}
            </Button>
            <p className="text-center text-xs leading-relaxed text-subtle">
              Your information is only used to contact you about your roofing
              request.
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium">{label}</span>
      {children}
      {error ? (
        <span className="mt-1 block text-xs text-danger" role="alert">
          {error}
        </span>
      ) : null}
    </label>
  );
}

function inputClass(error?: string) {
  return cn(
    "h-12 w-full rounded-control border bg-paper px-3.5 text-base text-ink outline-none transition-shadow",
    "placeholder:text-subtle",
    error
      ? "border-danger focus:shadow-[0_0_0_3px_color-mix(in_oklab,var(--color-danger)_25%,transparent)]"
      : "border-line focus:border-ink focus:shadow-[0_0_0_3px_color-mix(in_oklab,var(--color-ink)_12%,transparent)]",
  );
}
