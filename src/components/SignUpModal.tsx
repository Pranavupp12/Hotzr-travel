import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";

type SignupModalProps = {
  open: boolean;
  onClose: () => void;
};

// You may use your own modal/dialog primitives for focus trap/esc support. This is a simple "overlay modal".
export function SignupModal({ open, onClose }: SignupModalProps) {
  if (!open) return null; // Don't render if not open

  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
      {/* Modal backdrop: click to close */}
      <div className="absolute inset-0" onClick={onClose} />
      <Card className="relative w-[350px] z-10 p-0">
        <CardHeader>
          <CardTitle>Sign Up</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Replace the form below with your actual form implementation */}
          <form>
            <input type="email" placeholder="Email" className="mb-3 w-full p-2 border rounded" />
            <input type="password" placeholder="Password" className="mb-3 w-full p-2 border rounded" />
            <button className="w-full bg-primary text-white py-2 rounded" type="submit">
              Create Account
            </button>
          </form>
          {/* Close button optional */}
          <button
            type="button"
            className="absolute top-2 right-2 text-muted-foreground"
            onClick={onClose}
            aria-label="Close"
          >
            ×
          </button>
        </CardContent>
      </Card>
    </div>
  );
}
