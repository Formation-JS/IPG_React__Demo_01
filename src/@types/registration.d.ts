export type RegistrationCamping = 'no' | 'base' | 'apollo';

export type RegistrationData = {
  email: string;
  name: string;
  breakfast: boolean;
  camping: RegistrationCamping;
}
