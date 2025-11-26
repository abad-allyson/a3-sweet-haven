export default defineAppConfig({
  ui: {
    colors: {
      primary: "main",
      secondary: "white",
      error: "red",
    },
    card: {
      variants: {
        variant: {
          outline: "ring-0",
        },
      },
    },
    formField: {
      slots: {
        label: "text-accent-950 font-bold",
      },
    },
    input: {
      slots: {
        base: "placeholder:text-gray-950 placeholder:opacity-50",
      },
    },
    inputNumber: {
      slots: {
        base: "placeholder:text-gray-950 placeholder:opacity-50",
      },
    },
    select: {
      slots: {
        placeholder: "text-gray-950 opacity-50",
        item: "text-gray-950 data-highlighted:not-data-disabled:bg-accent-50 data-highlighted:not-data-disabled:text-accent-900",
      },
    },
    button: {
      slots: { base: "cursor-pointer" },
    },
  },
});
