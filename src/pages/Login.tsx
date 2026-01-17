import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-paper px-4">
      <div className="heritage-card w-full max-w-md p-8">
        <h1 className="font-display text-2xl mb-6 text-center">
          Welcome Back
        </h1>

        <div className="space-y-4">
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
            Login
          </Button>
        </div>

        <p className="text-sm text-center text-muted-foreground mt-6">
          Don’t have an account?{' '}
          <span
            className="text-primary cursor-pointer"
            onClick={() => navigate('/signup')}
          >
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;