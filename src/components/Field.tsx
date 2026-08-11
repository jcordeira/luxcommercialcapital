import type { ReactNode } from 'react';

/**
 * Fields carry no box: a 1px underline that turns gold on focus. Errors are
 * announced next to the field rather than only signalled by colour.
 */
export function Field({
  name,
  label,
  error,
  children,
}: {
  name: string;
  label: string;
  error?: string;
  children: (props: {
    id: string;
    name: string;
    'aria-invalid'?: 'true';
    'aria-describedby'?: string;
  }) => ReactNode;
}) {
  const id = `field-${name}`;
  const errorId = `${id}-error`;

  return (
    <div className="field">
      <label className="field-label" htmlFor={id}>
        {label}
      </label>
      {children({
        id,
        name,
        'aria-invalid': error ? 'true' : undefined,
        'aria-describedby': error ? errorId : undefined,
      })}
      {error && (
        <p className="field-error" id={errorId} role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

export function TextField({
  name,
  label,
  error,
  type = 'text',
  placeholder,
  autoComplete,
}: {
  name: string;
  label: string;
  error?: string;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
}) {
  return (
    <Field name={name} label={label} error={error}>
      {(props) => (
        <input
          {...props}
          className="field-input"
          type={type}
          placeholder={placeholder}
          autoComplete={autoComplete}
        />
      )}
    </Field>
  );
}

export function SelectField({
  name,
  label,
  error,
  options,
}: {
  name: string;
  label: string;
  error?: string;
  options: readonly string[];
}) {
  return (
    <Field name={name} label={label} error={error}>
      {(props) => (
        <select {...props} className="field-select" defaultValue="">
          <option value="">Select</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      )}
    </Field>
  );
}

export function TextareaField({
  name,
  label,
  error,
  rows,
  placeholder,
}: {
  name: string;
  label: string;
  error?: string;
  rows: number;
  placeholder?: string;
}) {
  return (
    <Field name={name} label={label} error={error}>
      {(props) => (
        <textarea {...props} className="field-textarea" rows={rows} placeholder={placeholder} />
      )}
    </Field>
  );
}
