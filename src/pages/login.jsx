import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div
      key="1"
      className="min-h-screen flex items-center justify-center bg-gradient-to-l from-[#0645ad] via-[#f8f9fa] to-[#0645ad] py-12 px-4 sm:px-6 lg:px-8 font-libertine"
    >
      <div className="max-w-md w-full space-y-8 bg-[#f8f9fa] p-6 rounded-lg shadow-md">
        <div>
          <img
            alt="Wikipedia Logo"
            className="mx-auto h-12 w-auto"
            height="72"
            src="/placeholder.svg"
            style={{
              aspectRatio: "72/72",
              objectFit: "cover",
            }}
            width="72"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-black">Sign in to your account</h2>
        </div>
        <form className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <Label className="sr-only" htmlFor="username">
                Username
              </Label>
              <Input
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-black rounded-t-md focus:outline-none focus:ring-[#0645ad] focus:border-[#0645ad] focus:z-10 sm:text-sm"
                id="username"
                name="username"
                placeholder="Username"
                required
                type="text"
              />
            </div>
            <div>
              <Label className="sr-only" htmlFor="password">
                Password
              </Label>
              <Input
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-black rounded-b-md focus:outline-none focus:ring-[#0645ad] focus:border-[#0645ad] focus:z-10 sm:text-sm"
                id="password"
                name="password"
                placeholder="Password"
                required
                type="password"
              />
            </div>
          </div>
          <div>
            <Button
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#0645ad] hover:bg-[#0645ad] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0645ad]"
              type="submit"
            >
              Sign in
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}