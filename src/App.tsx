import { useState } from 'react';
import { LoginScreen } from './components/LoginScreen';
import { DashboardScreen } from './components/DashboardScreen';
import { NewActivityScreen } from './components/NewActivityScreen';
import { ActivityDetailScreen } from './components/ActivityDetailScreen';
import { SummaryScreen } from './components/SummaryScreen';
import { ScheduleScreen } from './components/ScheduleScreen';
import { ProfileScreen } from './components/ProfileScreen';

type Screen = 'login' | 'dashboard' | 'new-activity' | 'activity-detail' | 'summary' | 'schedule' | 'profile';

interface Activity {
  id: number;
  title: string;
  category: string;
  interest: number;
  status: 'pending' | 'done' | 'postponed';
}

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('login');
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setCurrentScreen('dashboard');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentScreen('login');
    setSelectedActivity(null);
  };

  const handleNavigate = (screen: string) => {
    setCurrentScreen(screen as Screen);
  };

  const handleActivitySelect = (activity: Activity) => {
    setSelectedActivity(activity);
    setCurrentScreen('activity-detail');
  };

  return (
    <div className="w-full h-screen bg-white overflow-hidden">
      {/* Mobile viewport container - simulates Pixel 6 (1080x2400) */}
      <div className="mx-auto h-full max-w-[1080px] relative bg-white shadow-2xl">
        {currentScreen === 'login' && (
          <LoginScreen onLogin={handleLogin} />
        )}
        
        {currentScreen === 'dashboard' && (
          <DashboardScreen 
            onNavigate={handleNavigate}
            onActivitySelect={handleActivitySelect}
          />
        )}
        
        {currentScreen === 'new-activity' && (
          <NewActivityScreen onNavigate={handleNavigate} />
        )}
        
        {currentScreen === 'activity-detail' && selectedActivity && (
          <ActivityDetailScreen 
            activity={selectedActivity}
            onNavigate={handleNavigate}
          />
        )}
        
        {currentScreen === 'summary' && (
          <SummaryScreen onNavigate={handleNavigate} />
        )}
        
        {currentScreen === 'schedule' && (
          <ScheduleScreen onNavigate={handleNavigate} />
        )}
        
        {currentScreen === 'profile' && (
          <ProfileScreen 
            onNavigate={handleNavigate}
            onLogout={handleLogout}
          />
        )}
      </div>
    </div>
  );
}
