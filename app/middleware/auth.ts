export default defineNuxtRouteMiddleware(async (to) => {
  const user = useSupabaseUser();

  if (
    to.path.startsWith("/admin") &&
    to.path !== "/admin/login" &&
    !user.value
  ) {
    return navigateTo("/admin/login");
  }

  if (to.path === "/admin/login" && user.value) {
    return navigateTo("/admin");
  }
});
