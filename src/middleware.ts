import { auth, clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

// Define public routes
const isPublicRoute = createRouteMatcher([
    "/sign-in",
    "/sign-up",
    "/",
    "/home"
]);

// Define public API routes
const isPublicApiRoute = createRouteMatcher([
    "/api/public"
]);

export default clerkMiddleware((auth, req) => {
    // Destructure userId from auth()
    const { userId } = auth();

    const currentUrl = new URL(req.url);
    const isHomePage = currentUrl.pathname === "/home";
    const isApiRequest = currentUrl.pathname.startsWith("/api");

    // If user is logged in and tries to access a public route (except home), redirect to home
    if (userId && isPublicRoute(req) && !isHomePage) {
        return NextResponse.redirect(new URL("/home", req.url));
    }

    // If user is not logged in
    if (!userId) {
        // Redirect to sign-in if trying to access a protected route
        if (!isPublicRoute(req) && !isPublicApiRoute(req)) {
            return NextResponse.redirect(new URL("/sign-in", req.url));
        }

        // Redirect to sign-in if trying to access a protected API route
        if (isApiRequest && !isPublicApiRoute(req)) {
            return NextResponse.redirect(new URL("/sign-in", req.url));
        }
    }

    // Allow the request to proceed
    return NextResponse.next();
});

export const config = {
    matcher: [
        // Skip Next.js internals and all static files, unless found in search params
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        // Always run for API routes
        '/(api|trpc)(.*)',
    ],
};