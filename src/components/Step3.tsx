import { useFormContext } from "@/context/FormContext";
import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft } from "lucide-react";

const formSchema = z.object({
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(50, "Password must be less than 50 characters")
    .regex(/[A-Z]/, "Password must include at least one uppercase letter")
    .regex(/[a-z]/, "Password must include at least one lowercase letter")
    .regex(/[0-9]/, "Password must include at least one number"),
});
type FormData = z.infer<typeof formSchema>;

const Step3: React.FC = () => {
  const { register, handleSubmit, formState } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
    },
  });
  const { state, updateAction } = useFormContext();
  console.log(state);
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    updateAction(data);

    navigate("/signup/step4");
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Step 3</h2>
        <div>Please Set Your Password to Log in</div>
        <label>
          Password
          <Input
            {...register("password")}
            defaultValue={state.password || ""}
          />
        </label>
        {formState.errors.password && (
          <p className="text-red-500">{formState.errors.password.message}</p>
        )}
        <div className="flex align-center gap-2">
          <Button
            type="button"
            className="text-white"
            onClick={() => navigate("/signup/step2")}
          >
            <ArrowLeft />
          </Button>
          <Button type="submit" className="bg-secondary text-white">
            Next
          </Button>
        </div>
      </form>
    </>
  );
};

export default Step3;
