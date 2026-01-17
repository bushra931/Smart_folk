import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Signup = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-paper px-4">
      <div className="heritage-card w-full max-w-md p-8">
        <h1 className="font-display text-2xl mb-6 text-center">
          Create Account
        </h1>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none"
          />

          <Button className="w-full" size="lg">
            Sign Up
          </Button>
        </div>

        <p className="text-sm text-center text-muted-foreground mt-6">
          Already have an account?{' '}
          <span
            className="text-primary cursor-pointer"
            onClick={() => navigate('/login')}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;