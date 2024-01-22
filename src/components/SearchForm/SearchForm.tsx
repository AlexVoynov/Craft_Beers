import { useForm } from "react-hook-form";
import { TextField, Button, Typography } from "@mui/material";

interface SearchFormProps {
  setFood: (value: string) => void;
}

interface SearchFormValues {
  food: string;
}

const SearchForm = ({ setFood }: SearchFormProps) => {
  const { register, handleSubmit } = useForm<SearchFormValues>();
  
  const updateFood = ({ food }: SearchFormValues) => {
    setFood(food);
  };

  return (
    <form
      style={{ display: "flex", flexDirection: "column" }}
      onSubmit={handleSubmit(updateFood)}
    >
      <TextField
        helperText={
          <p style={{textAlign: "center"}}>
            Please enter the name of the food that will be served with beer,
            for example: 'spicy', or 'cake'.
            <br />
            If you log in, you can make a selection based on other parameters.
          </p>
        }
        placeholder="food"
        sx={{
          my: "1rem",
          display: "flex",
          mx: "auto",
        }}
        {...register("food", { required: true })}
      />
      <Button
        variant="contained"
        type="submit"
        sx={[
          {
            display: "block",
            mx: "auto",
            mb: ".5rem",
            bgcolor: "success.main",
          },
          {
            "&:hover": { bgcolor: "success.dark" },
          },
        ]}
      >
        Search
      </Button>
    </form>
  );
};

export default SearchForm;
