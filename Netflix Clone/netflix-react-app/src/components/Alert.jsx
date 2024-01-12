import Alert from 'react-bootstrap/Alert';

function AlertLoading() {
    return (
        <>
          {[
            'primary',
            'secondary',
            'success',
            'danger',
            'warning',
            'info',
            'light',
            'dark',
          ].map((variant) => (
            <Alert key={variant} variant={variant}>
             Movie not found!
            </Alert>
          ))}
        </>
      );
    }

export default AlertLoading;