import { Button, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";

interface AdvancedSearchFormProps {
  setAbv_gt: (value: string) => void;
  setAbv_it: (value: string) => void;
  setIbu_gt: (value: string) => void;
  setIbu_it: (value: string) => void;
  setEbc_gt: (value: string) => void;
  setEbc_it: (value: string) => void;
}

interface AdvancedSearchFormValues {
  abv_gt: string;
  abv_it: string;
  ibu_gt: string;
  ibu_it: string;
  ebc_gt: string;
  ebc_it: string;
}

const AdvancedSearchForm = ({
  setAbv_gt,
  setAbv_it,
  setIbu_gt,
  setIbu_it,
  setEbc_gt,
  setEbc_it,
}: AdvancedSearchFormProps) => {
  
  const { register, handleSubmit } = useForm<AdvancedSearchFormValues>();

  const updateEnteredValues = ({
    abv_gt,
    abv_it,
    ibu_gt,
    ibu_it,
    ebc_gt,
    ebc_it,
  }: AdvancedSearchFormValues) => {
    setAbv_gt(abv_gt);
    setAbv_it(abv_it);
    setIbu_gt(ibu_gt);
    setIbu_it(ibu_it);
    setEbc_gt(ebc_gt);
    setEbc_it(ebc_it);
  };

  return (
    <form
      style={{ display: "flex", flexDirection: "column", margin: "1rem" }}
      onSubmit={handleSubmit(updateEnteredValues)}
    >
      <Typography sx={{ display: "flex", justifyContent: "center" }}>
        Please enter alcohol content between 0 and 55
      </Typography>

      {/* Text field for alcochol volume */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TextField
          sx={{ mr: ".7rem", my: "1rem" }}
          id="outlined-select-currency"
          label="Alcohol from"
          defaultValue=""
          helperText="Please enter alcohol content FROM"
          {...register("abv_gt", { required: false })}
        ></TextField>
        <TextField
          sx={{ ml: ".7rem", my: "1rem" }}
          id="outlined-select-currency-native"
          label="Alcohol to"
          defaultValue=""
          helperText="Please enter alcohol content TO"
          {...register("abv_it", { required: false })}
        ></TextField>
      </div>

      <Typography sx={{ display: "flex", justifyContent: "center" }}>
        Please enter bitterness level ranging from 5 to 120
      </Typography>

      {/* Text field for bitterness */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TextField
          sx={{ mr: ".7rem", my: "1rem" }}
          id="outlined-select-currency"
          label="Bitterness from"
          defaultValue=""
          helperText="Please enter bitterness value FROM"
          {...register("ibu_gt", { required: false })}
        ></TextField>
        <TextField
          sx={{ ml: ".7rem", my: "1rem" }}
          id="outlined-select-currency-native"
          label="Bitterness to"
          defaultValue=""
          helperText="Please enter bitterness value TO"
          {...register("ibu_it", { required: false })}
        ></TextField>
      </div>

      <Typography sx={{ display: "flex", justifyContent: "center" }}>
        Please enter color intensity ranging from 5 to 160
      </Typography>

      {/* Text field for color intensity */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <TextField
          sx={{ mr: ".7rem", my: "1rem" }}
          id="outlined-select-currency"
          label="Color intensity from"
          defaultValue=""
          helperText="Please enter color intensity FROM"
          {...register("ebc_gt", { required: false })}
        ></TextField>

        <TextField
          sx={{ ml: ".7rem", my: "1rem" }}
          id="outlined-select-currency"
          label="Color intensity to"
          defaultValue=""
          helperText="Please enter color intensity TO"
          {...register("ebc_it", { required: false })}
        ></TextField>
      </div>

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

export default AdvancedSearchForm;
