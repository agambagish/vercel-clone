import { z } from "zod";

export const ReqSchema = z.object({
  subdomain: z
    .string({
      required_error: "Subdomain is required.",
    })
    .min(3, { message: "Subdomain must be 3 characters or above." }),
  gitURL: z
    .string({
      required_error: "Git URL is required",
    })
    .regex(
      new RegExp(
        /((git|ssh|http(s)?)|(git@[\w\.]+))(:(\/\/)?)([\w\.@\:/\-~]+)(\.git)(\/)?/
      ),
      { message: "Please enter valid github repo link." }
    ),
});
