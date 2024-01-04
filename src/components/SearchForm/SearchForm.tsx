import { useForm } from "react-hook-form";
import { TextField, Button } from "@mui/material";

interface SearchFormProps {
  setKeyword: (value: string) => void;
}

interface SearchFormValues {
  keyword: string;
}

const SearchForm = ({ setKeyword }: SearchFormProps) => {
  const { register, handleSubmit } = useForm<SearchFormValues>();

  const updateKeyword = ({ keyword }: SearchFormValues) => {
    setKeyword(keyword);
  };

  return (
    <form
      style={{ display: "flex", flexDirection: "column" }}
      onSubmit={handleSubmit(updateKeyword)}
    >
      <TextField
        helperText={`Please enter the name of the food 
        that will be served with beer, for example: 'spicy', or 'cake'.`}
        placeholder="keyword"
        sx={{ my: ".5rem", display: "flex", justifyContent: "center", mx: "auto" }}
        {...register("keyword", { required: true })}
      />
      <Button
        variant="contained"
        type="submit"
        sx={[
          { display: "block", mx: "auto", mb: ".5rem", bgcolor: "success.main" },
          {
            '&:hover': { bgcolor: "success.dark"}
          },
        ]}
      >
        Search
      </Button>
    </form>
  );
};

export default SearchForm;
