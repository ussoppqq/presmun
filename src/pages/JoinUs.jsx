import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const JoinUs = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const hasRedirected = new URLSearchParams(location.search).get('redirected');

    if (!hasRedirected) {
      const newUrl = `${location.pathname}?redirected=true`;
      navigate(newUrl, { replace: true });
      window.location.href = 'https://bit.ly/PRESMUN2025EarlyBird';
    } else {
      navigate('/', { replace: true });
    }
  }, [location, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#000420] text-white">
      <div className="text-center">
      </div>
    </div>
  );
};

export default JoinUs;