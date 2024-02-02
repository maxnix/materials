import { Link, useSearchParams } from "react-router-dom";
import SuccessImage from "../assets/verified-success.png";
import FailedImage from "../assets/verified-failed.png";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";

export const EmailValidation = () => {
  const [searchParams] = useSearchParams();
  const params = Object.fromEntries(searchParams.entries());
  return (
    <div className="flex justify-center h-screen items-center">
      {!params.failed ? <EmailVerified /> : <EmailVerificationFailed />}
    </div>
  );
};

const EmailVerified = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 p-4  border border-gray-200 rounded-sm max-w-[468px]">
      <div className="flex flex-col justify-center items-center gap-2">
        <h1 className="text-2xl font-bold text-center">Email Verified</h1>
        <h3 className="text-md text-center text-gray-400">
          Complimenti, la tua mail è state confermata ora puoi accedere all’app{" "}
        </h3>
      </div>
      <div className="max-w-[226px] w-full">
        <AspectRatio ratio={1}>
          <img src={SuccessImage} alt="success" className="w-full" />
        </AspectRatio>
      </div>
      <Link to="/auth/login" className="w-full">
        <Button className="w-full">Accedi</Button>
      </Link>
    </div>
  );
};

const EmailVerificationFailed = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 p-4  border border-gray-200 rounded-sm max-w-[468px]">
      <div className="flex flex-col justify-center items-center gap-2">
        <h1 className="text-2xl font-bold text-center">
          Email Verification Failed
        </h1>
        <h3 className="text-md text-center text-gray-400">
          Oops, something went wrong. Please try again later
        </h3>
      </div>
      <div className="max-w-[226px] w-full">
        <AspectRatio ratio={1}>
          <img src={FailedImage} alt="failed" className="w-full" />
        </AspectRatio>
      </div>
      <Button className="w-full">Invia nuovamente Link</Button>
    </div>
  );
};
