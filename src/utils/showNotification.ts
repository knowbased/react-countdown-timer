export const showNotification = (
  title: string,
  option?: NotificationOptions | undefined,
  onClick?: () => void,
) => {
  if (!('Notification' in window)) return;

  if (Notification.permission === 'granted') {
    const notification = new Notification(title, option);

    notification.onclick = () => {
      if (onClick) {
        onClick();
      }
      notification.close();
      window.focus();
    };
  } else if (Notification.permission === 'default') {
    Notification.requestPermission();
  }
};
