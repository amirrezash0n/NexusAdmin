import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function SignupForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form className="p-6 md:p-8">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-2xl font-bold">Hello to you</h1>
                <p className="text-muted-foreground text-balance">
                  Sign up to your Nexus Panel
                </p>
              </div>
              <div className="grid gap-3">
                <Input
                  id="name"
                  type="text"
                  placeholder="First Name"
                  required
                />
              </div>
              <div className="grid gap-3">
                <Input
                  id="lastname"
                  type="text"
                  placeholder="Last Name"
                  required
                />
              </div>
              <div className="grid gap-3">
                <Input
                  id="email"
                  type="email"
                  placeholder="Email Address"
                  required
                />
              </div>
              <div className="grid gap-3">
                <Input
                  id="password"
                  type="password"
                  placeholder="Password"
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Sign up
              </Button>
              <div className="text-center text-sm">
                Already have an account?{" "}
                <a href="#" className="underline underline-offset-4">
                  Sign In
                </a>
              </div>
            </div>
          </form>
          <div className="bg-muted relative hidden md:block">
            <img
              src="/admin-pic2.jpg"
              alt="Image"
              className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
            />
          </div>
        </CardContent>
      </Card>
      <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </div>
    </div>
  );
}
