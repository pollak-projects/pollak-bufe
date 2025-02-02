import { ref, computed, onMounted, onUnmounted, watch } from "vue";
import { useRoute } from "vue-router";

export function useInactivityTimer(router, options = {}) {
  const {
    inactivityTime = 900000,
    events = [
      "mousemove",
      "keydown",
      "click",
      "touchstart",
      "touchmove",
      "touchend",
    ],
    excludeRoutes = [],
  } = options;

  const route = useRoute();
  const remainingTime = ref(inactivityTime);
  const timeoutId = ref(null);
  const intervalId = ref(null);
  const expectedEndTime = ref(0);
  const isActive = ref(true);

  const formattedTime = computed(() => {
    const seconds = Math.floor(remainingTime.value / 1000);
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
  });

  const startTimer = () => {
    expectedEndTime.value = Date.now() + inactivityTime;
    clearInterval(intervalId.value);

    intervalId.value = setInterval(() => {
      const timeLeft = expectedEndTime.value - Date.now();
      remainingTime.value = timeLeft > 0 ? timeLeft : 0;

      if (timeLeft <= 0) {
        clearInterval(intervalId.value);
        router.push("/");
      }
    }, 1000);
  };

  const resetTimer = () => {
    if (excludeRoutes.includes(route.path)) return;

    remainingTime.value = inactivityTime;
    clearTimeout(timeoutId.value);
    timeoutId.value = setTimeout(() => {
      router.push("/");
    }, inactivityTime);
    startTimer();
  };

  const setupListeners = () => {
    cleanupListeners();
    events.forEach((event) => {
      document.addEventListener(event, resetTimer, { passive: true });
    });
    resetTimer();
  };

  const cleanupListeners = () => {
    events.forEach((event) => {
      document.removeEventListener(event, resetTimer);
    });
    clearTimeout(timeoutId.value);
    clearInterval(intervalId.value);
  };

  watch(
    () => route.path,
    (newPath) => {
      if (excludeRoutes.includes(newPath)) {
        cleanupListeners();
        isActive.value = false;
      } else {
        setupListeners();
        isActive.value = true;
      }
    },
    { immediate: true }
  );

  onUnmounted(cleanupListeners);

  return { formattedTime, remainingTime, resetTimer, isActive };
}
