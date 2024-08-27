import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";

export default function AuthForm() {
  return (
    <div className="mt-2 flex w-full items-center justify-center px-2">
      <Tabs defaultValue="login" className="w-[500px]">
        <TabsList className="w-full">
          <TabsTrigger value="login" className="w-full">
            Login
          </TabsTrigger>
          <TabsTrigger value="register" className="w-full">
            Register
          </TabsTrigger>
        </TabsList>
        <TabsContent value="login">
          <LoginForm />
        </TabsContent>
        <TabsContent value="register">
          <RegisterForm />
        </TabsContent>
      </Tabs>
    </div>
  );
}
