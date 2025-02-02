import { SignUp } from '@clerk/nextjs';

export default function Page() {
  return (
    <div className="min-h-screen w-full bg-black">
      {/* Decorative top bar */}
      <div className="h-1 bg-gradient-to-r from-purple-600 to-blue-600" />
      
      <div className="max-w-[1200px] mx-auto p-4">
        {/* Logo or app name */}
        <div className="flex items-center gap-2 py-4">
          <div className="h-8 w-8 rounded-full bg-gradient-to-r from-purple-600 to-blue-600" />
          <span className="text-xl font-semibold text-white">Mission Impossible</span>
        </div>
      </div>

      {/* Sign-in container */}
      <div className="flex items-center justify-center px-4 -mt-20">
        <SignUp
          appearance={{
            elements: {
              rootBox: "w-full max-w-[400px]",
              card: "shadow-2xl rounded-xl border border-gray-800 bg-gray-900",
              headerTitle: "text-white",
              headerSubtitle: "text-gray-400",
              socialButtonsBlockButton: 
                "border border-gray-700 bg-gray-800 hover:bg-gray-700 text-white transition duration-200",
              dividerLine: "bg-gray-700",
              dividerText: "text-gray-400",
              formButtonPrimary: 
                "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all duration-200",
              formFieldInput: 
                "rounded-lg border-gray-700 bg-gray-800 text-white focus:border-purple-500 focus:ring-purple-500 transition-all duration-200",
              formFieldLabel: "text-gray-300",
              footerActionLink: "text-purple-400 hover:text-purple-300",
              identityPreviewText: "text-gray-300",
              identityPreviewEditButton: "text-purple-400 hover:text-purple-300",
              formFieldSuccessText: "text-green-400",
              formFieldErrorText: "text-red-400",
              alertText: "text-gray-300",
              alertTextDanger: "text-red-400",
              providerIcon: "text-white",
              formFieldLabelRow: "text-gray-300",
              otpCodeFieldInput: "bg-gray-800 border-gray-700 text-white"
            },
            layout: {
              socialButtonsPlacement: "top"
            },
            variables: {
              colorPrimary: '#9333ea',
              colorBackground: '#111827',
              colorInputBackground: '#1f2937',
              colorInputText: '#ffffff',
              colorTextOnPrimaryBackground: '#ffffff'
            }
          }}
        />
      </div>
    </div>
  );
}