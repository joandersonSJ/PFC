import { toast } from "react-toastify";

const useNotifySucess = () => {
  toast.success("Login efetuado com sucesso !", {
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
