import React, { useState } from 'react';
import { X, Send} from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { programsData } from '../utils/categories';

const FormComponent = ({closeReferralForm}) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    referrerName: '',
    referrerEmail: '',
    refereeName: '',
    refereeEmail: '',
    program: '',
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.referrerName) newErrors.referrerName = 'Required';
    if (!formData.referrerEmail) {
      newErrors.referrerEmail = 'Required';
    } else if (!/\S+@\S+\.\S+/.test(formData.referrerEmail)) {
      newErrors.referrerEmail = 'Invalid email';
    }
    if (!formData.refereeName) newErrors.refereeName = 'Required';
    if (!formData.refereeEmail) {
      newErrors.refereeEmail = 'Required';
    } else if (!/\S+@\S+\.\S+/.test(formData.refereeEmail)) {
      newErrors.refereeEmail = 'Invalid email';
    }
    if (!formData.program) newErrors.program = 'Required';
    
    // Show toast for form errors
    if (Object.keys(newErrors).length > 0) {
      toast.error('Please fix the errors in the form');
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setLoading(true);
      try {
        const response = await axios.post( `${process.env.REACT_APP_API_URL}/referrals`, formData);
        console.log(response);
        
        if (response.status === 201) {
          toast.success(response.data.message || 'hello');
          setFormData({
            referrerName: '',
            referrerEmail: '',
            refereeName: '',
            refereeEmail: '',
            program: '',
          });
          setTimeout(() => {
            closeReferralForm();
          }, 2000);
        } else {
          toast.error(response.data.message || 'Failed to send referral');
        }
      } catch (error) {
        console.error('Error:', error.response.data.message);
        toast.error(error.response.data.message || error.message || 'Something went wrong. Please try again.');
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
      
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl w-full max-w-md relative">
            <button
              onClick={closeReferralForm}
              className="absolute right-4 top-4"
              disabled={loading}
            >
              <X className="w-6 h-6 text-gray-400 hover:text-gray-600" />
            </button>
            
            <form onSubmit={handleSubmit} className="p-6">
              <h2 className="text-2xl font-bold text-indigo-900 mb-6">
                Refer a Friend
              </h2>
              
              {/* Referrer Details */}
              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={formData.referrerName}
                    onChange={(e) =>
                      setFormData({ ...formData, referrerName: e.target.value })
                    }
                    className={`w-full px-3 py-2 border rounded-lg ${
                      errors.referrerName ? 'border-red-500' : 'border-gray-300'
                    }`}
                    disabled={loading}
                  />
                  {errors.referrerName && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.referrerName}
                    </p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    value={formData.referrerEmail}
                    onChange={(e) =>
                      setFormData({ ...formData, referrerEmail: e.target.value })
                    }
                    className={`w-full px-3 py-2 border rounded-lg ${
                      errors.referrerEmail ? 'border-red-500' : 'border-gray-300'
                    }`}
                    disabled={loading}
                  />
                  {errors.referrerEmail && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.referrerEmail}
                    </p>
                  )}
                </div>
              </div>

              {/* Friend's Details */}
              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Friend's Name
                  </label>
                  <input
                    type="text"
                    value={formData.refereeName}
                    onChange={(e) =>
                      setFormData({ ...formData, refereeName: e.target.value })
                    }
                    className={`w-full px-3 py-2 border rounded-lg ${
                      errors.refereeName ? 'border-red-500' : 'border-gray-300'
                    }`}
                    disabled={loading}
                  />
                  {errors.refereeName && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.refereeName}
                    </p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Friend's Email
                  </label>
                  <input
                    type="email"
                    value={formData.refereeEmail}
                    onChange={(e) =>
                      setFormData({ ...formData, refereeEmail: e.target.value })
                    }
                    className={`w-full px-3 py-2 border rounded-lg ${
                      errors.refereeEmail ? 'border-red-500' : 'border-gray-300'
                    }`}
                    disabled={loading}
                  />
                  {errors.refereeEmail && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.refereeEmail}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Select Course
                  </label>
                  <select
                    value={formData.program}
                    onChange={(e) =>
                      setFormData({ ...formData, program: e.target.value })
                    }
                    className={`w-full px-3 py-2 border rounded-lg ${
                      errors.program ? 'border-red-500' : 'border-gray-300'
                    }`}
                    disabled={loading}
                  >
                    <option value="">Select a program</option>
                    {programsData.map((program) => (
                      <option key={program.id} value={program.name}>
                        {program.name}
                      </option>
                    ))}
                  </select>
                  {errors.program && (
                    <p className="text-red-500 text-sm mt-1">{errors.program}</p>
                  )}
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2"
                disabled={loading}
              >
                {loading ? (
                  <span className="inline-block h-5 w-5 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-middle">
                  </span>
                ) : (
                  <Send className="w-5 h-5" />
                )}
                {loading ? 'Sending...' : 'Send Referral'}
              </button>
            </form>
          </div>
        </div>
      
    </div>
  );
};

export default FormComponent;