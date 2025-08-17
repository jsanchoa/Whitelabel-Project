import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router";
import { useFormHook } from "../hooks/use-hook";
import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";
import { useEffect } from "react";
export const LoginPage = ({ className, ...props }) => {

  const { username, password, onInputChange } = useFormHook({
    username: "",
    password: "",
  });

  const { user, login } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {

    if(user)
      navigate("/dashboard");


  }, [user, navigate]);
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      //Utilizo el metodo del AuthContext
      await login(username, password);

      //Redirecciono al Dashboard
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <div className={cn("flex flex-col gap-6", className)} {...props}>
          <Card>
            <CardHeader>
              <CardTitle>Login to your account</CardTitle>
              <CardDescription>
                Enter your username below to login to your account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-6">
                  <div className="grid gap-3">
                    <Label htmlFor="username">Username</Label>
                    <Input
                      type="username"
                      name="username"
                      placeholder="example"
                      value={username}
                      onChange={onInputChange}
                      required
                      autoComplete="username"
                    />
                  </div>
                  <div className="grid gap-3">
                    <div className="flex items-center">
                      <Label htmlFor="password">Password</Label>
                      <a
                        href="#"
                        className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                      >
                        Forgot your password?
                      </a>
                    </div>
                    <Input
                      type="password"
                      name="password"
                      placeholder="password"
                      value={password}
                      onChange={onInputChange}
                      required
                      autoComplete="current-password"
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <Button type="submit" className="w-full">
                      Login
                    </Button>
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
