import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";

export default function AuthForm() {
  return (
    <div className="mt-4 flex items-center justify-center px-2">
      <Tabs defaultValue="account" className="w-[500px]">
        <TabsList className="w-full bg-[#2b2b2bf2]">
          <TabsTrigger
            value="login"
            className="w-full text-white data-[state=active]:!bg-[#5a5a5aa3] data-[state=active]:text-white"
          >
            Login
          </TabsTrigger>
          <TabsTrigger
            value="register"
            className="w-full text-white data-[state=active]:!bg-[#5a5a5aa3] data-[state=active]:text-white"
          >
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
