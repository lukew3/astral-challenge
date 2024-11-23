import { createCallerFactory, createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { z } from "zod";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  submitImage: publicProcedure
    .input(z.object({ imageb64: z.string().min(1) }))
    .output(z.string())
    .mutation(({ input }) => {
      console.log(input.imageb64);
      return input.imageb64;
    }),
});

// export type definition of API
export type AppRouter = typeof appRouter;

/**
 * Create a server-side caller for the tRPC API.
 * @example
 * const trpc = createCaller(createContext);
 * const res = await trpc.post.all();
 *       ^? Post[]
 */
export const createCaller = createCallerFactory(appRouter);
