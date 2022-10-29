import { FormEvent } from 'react';

export type FormSubmit = FormEvent<HTMLFormElement> & {
    target: {
      title: {
        value: string;
      };
      description: {
        value: string;
      };
      completed: {
        checked: boolean;
      };
    };
  };