import { authMiddleware } from "@clerk/nextjs";
console.log(authMiddleware,"authhh")

export default authMiddleware({
    publicRoutes:["/", "/applicant"]
});


export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};