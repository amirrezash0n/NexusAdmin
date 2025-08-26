import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import Error from "../ui/Error";
import { useSingup } from "@/features/useSignup";
import Spinner from "../ui/Spinner";

interface SignupFormData {
  name: string;
  lastname: string;
  email: string;
  password: string;
}

export default function SignupForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const { signup, isPending } = useSingup();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SignupFormData>();

  function onSubmit({ name, lastname, email, password }: SignupFormData) {
    signup({ name, lastname, email, password }, { onSettled: () => reset() });
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form onSubmit={handleSubmit(onSubmit)} className="p-6 md:p-8">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-2xl font-bold">Hello to you</h1>
                <p className="text-muted-foreground text-balance">
                  Sign up to your Nexus Panel
                </p>
              </div>
              <div className="relative grid gap-3">
                <Input
                  id="name"
                  type="text"
                  placeholder="First Name"
                  disabled={isPending}
                  {...register("name", { required: "This field is required" })}
                />
                {errors.name && (
                  <Error>{errors?.name?.message as string}</Error>
                )}
              </div>
              <div className="relative grid gap-3">
                <Input
                  id="lastname"
                  type="text"
                  placeholder="Last Name"
                  disabled={isPending}
                  {...register("lastname", {
                    required: "This field is required",
                  })}
                />
                {errors.lastname && (
                  <Error>{errors?.lastname?.message as string}</Error>
                )}
              </div>
              <div className="relative grid gap-3">
                <Input
                  id="email"
                  type="email"
                  placeholder="Email Address"
                  disabled={isPending}
                  {...register("email", {
                    required: "This field is required",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "Please provide a valid email address",
                    },
                  })}
                />
                {errors.email && (
                  <Error>{errors?.email?.message as string}</Error>
                )}
              </div>
              <div className="relative grid gap-3">
                <Input
                  id="password"
                  type="password"
                  placeholder="Password"
                  disabled={isPending}
                  {...register("password", {
                    required: "This field is required",
                    minLength: {
                      value: 8,
                      message: "Password needs a minimum of 8 characters",
                    },
                  })}
                />
                {errors.password && (
                  <Error>{errors?.password?.message as string}</Error>
                )}
              </div>
              <Button type="submit" className="w-full">
                {!isPending ? "Signup" : <Spinner className="text-white" />}
              </Button>
              <div className="text-center text-sm">
                Already have an account?{" "}
                <NavLink className="underline underline-offset-4" to="/login">
                  Sign In
                </NavLink>
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
