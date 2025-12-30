const fetchProfile = () => {
  return new Promise((res, rej) => {
    setTimeout(() => res("Profile Fetched"), 1000);
  });
};

const fetchNotifications = () => {
  return new Promise((res, rej) => {
    setTimeout(() => res("Notifications fetched"), 1500);
  });
};

const fetchSettings = () => {
  return new Promise((res, rej) => {
    setTimeout(() => res("Settings Loaded"), 1000);
  });
};

async function loadDashboard() {
  try {
    const [profile, notifications, settings] = await Promise.all([
      fetchProfile(),
      fetchNotifications(),
      fetchSettings(),
    ]);
    console.log(profile, notifications, settings);
  } catch (error) {
    console.error(error);
  }
}

loadDashboard()
