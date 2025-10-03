import { Eye, EyeOff, User } from 'lucide-react';
import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const navigate = useNavigate();

  const [login, setLogin] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Update form
  const handleChange = useCallback((event) => {
    const { name, value } = event.target;
    setLogin(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  }, [errors]);

  // Validation
  const validate = useCallback(() => {
    const newErrors = {};
    if (!login.email) newErrors.email = 'ایمیل الزامی است';
    if (!login.password) newErrors.password = 'رمز عبور الزامی است';
    return newErrors;
  }, [login]);

  // Submit
  const handleSubmit = useCallback(async (event) => {
    event.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsLoading(true);

    try {
      // بررسی کاربر از localStorage
      const users = JSON.parse(localStorage.getItem('users') || '[]');

      const user = users.find(
        u => u.email === login.email && u.password === login.password
      );

      if (user) {
        // ذخیره کاربر فعلی
        localStorage.setItem('currentUser', JSON.stringify({
          name: user.name,
          email: user.email
        }));

        // Delay کوتاه
        await new Promise(resolve => setTimeout(resolve, 500));

        // هدایت به صفحه اصلی
        navigate('/home');
        toast.success('ورود با موفقیت انجام شد');
      } else {
        setErrors({ submit: 'ایمیل یا رمز عبور اشتباه است' });
        toast.error('ایمیل یا رمز عبور اشتباه است');
      }
    } catch (err) {
      setErrors({ submit: 'خطا در ورود' });
      toast.error('خطا در ورود');
    } finally {
      setIsLoading(false);
    }
  }, [login, validate, navigate]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">

        {/* Header */}
        <div className="text-center mb-6">
          <User className="text-blue-400 w-12 h-8 mx-auto" />
          <h1 className="text-2xl font-bold mt-2">ورود به حساب اصلی</h1>
        </div>

        {/* Error Alert */}
        {errors.submit && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
            {errors.submit}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">ایمیل</label>
            <input
              type="email"
              name="email"
              value={login.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="ایمیل خود را وارد کنید" />
              {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-1">رمز عبور</label>
            <div className="relative">
              <input
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 pr-10"
                value={login.password}
                onChange={handleChange}
                type={showPassword ? 'text' : 'password'}
                placeholder="*******" />
              <button
                type="button"
                className="absolute left-2 top-2.5 text-gray-500"
                onClick={() => setShowPassword(!showPassword)}>
                {showPassword
                  ? <EyeOff size={20} />
                  : <Eye size={20} />}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password}</p>
            )}
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 rounded-lg transition-colors disabled:opacity-50">
            {isLoading ? 'در حال ورود...' : 'ورود'}
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-gray-600 mt-4">
          حساب کاربری ندارید؟{' '}
          <button
            onClick={() => navigate('/signup')}
            className="text-indigo-600 hover:underline">
            ثبت نام کنید
          </button>
        </p>
        <ToastContainer />
      </div>
    </div>
  );
}

export default Login;