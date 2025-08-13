import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold">
            Hello World
          </CardTitle>
          <CardDescription className="text-lg text-gray-600 dark:text-gray-400">
            Welcome to our new Next.js app with shadcn/ui!
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <p className="text-gray-600 dark:text-gray-400">
            This is a clean slate with beautiful UI components ready to use.
          </p>
          <div className="space-y-3">
            <Button className="w-full" size="lg">
              Get Started
            </Button>
            <Link href="/hello-world" className="block">
              <Button variant="outline" className="w-full" size="lg">
                Visit Hello World Page →
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
