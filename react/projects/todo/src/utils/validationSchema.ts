import z from "zod";

export const todoForm = z.object({
  todo: z.string().min(3, "Inserisci almeno 3 caratteri"),
});

export const valideForm = (data: unknown) => {
  const validation = todoForm.safeParse(data);
  if (validation.success) {
    return {
      success: true,
      error: null,
    };
  }
  return {
    success: false,
    error: validation.error.errors.map((error) => error.message),
  };
};
