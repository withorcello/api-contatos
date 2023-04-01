// Arquivo /src/helpers/validate.ts

function isValidateRequest(req: any, inputs: string[]) {
  if (!inputs.length) return false;

  for (let i = 0; i < inputs.length; i++) {
    if (!req.body[inputs[i]]) return false;
  }

  return true;
}

function isValidateObjectRequest(req: any, inputs: any[]) {
  let message = [];

  for (let i = 0; i < inputs.length; i++) {
    if (!req.body[inputs[i].name]) message.push(inputs[i].message);
  }

  return !message.length ? true : message;
}

export { isValidateRequest, isValidateObjectRequest };
