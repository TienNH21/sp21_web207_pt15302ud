import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

function CreateProduct() {
  return (
    <div>
      <form>
        <Grid container spacing={2}>
          <Grid item sm={12}>
            <Grid container justify="center" spacing={2}>
              <TextField label="Id" />
              <TextField label="Name" />
              <TextField label="Price" />
            </Grid>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}

export default CreateProduct;
