import { toast } from "react-toastify";

const useNotifySucess = (msg) => {
  toast.success(msg, {
    autoClose: 3000,
  });
};

const useNotifyError = () => {
  toast.error("Informações incorretas.");
};

const useNotifyWarning = () => {
  toast.warn("Algumas informações estão auxentes");
};

export { useNotifySucess, useNotifyError, useNotifyWarning };
