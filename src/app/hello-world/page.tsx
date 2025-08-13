import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function HelloWorldPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Hello World! 👋
          </CardTitle>
          <CardDescription className="text-xl text-gray-600 dark:text-gray-400">
            A dedicated hello world page for testing-modu-4
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center space-y-6">
          <div className="space-y-3">
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Welcome to our special hello world page!
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              This page was created as part of the testing-modu-4 repository workflow.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button className="flex-1" size="lg">
              Say Hello Back! 🎉
            </Button>
            <Button variant="outline" className="flex-1" size="lg">
              Learn More
            </Button>
          </div>
          
          <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Built with Next.js 15, React 19, and shadcn/ui
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}