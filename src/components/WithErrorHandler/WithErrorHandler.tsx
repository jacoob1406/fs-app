import React from 'react';
import styles from './WithErrorHandler.module.scss';

interface Props {
  error: Error | null;
}

const withErrorHandler = (WrappedComponent: any) =>
  class WithErrorHandler extends React.Component<any> {
    public render() {
      if (this.props.error) {
        return (
          <div className={styles.errorContainer}>
            {this.props.error?.message || 'ERROR'}
          </div>
        );
      }
      return <WrappedComponent {...this.props} />;
    }
  };

export default withErrorHandler;
