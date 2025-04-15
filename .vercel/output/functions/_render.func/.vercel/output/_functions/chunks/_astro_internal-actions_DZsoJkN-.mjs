import nodemailer from 'nodemailer';
import { c as callSafely, a as ActionError, b as ActionInputError, g as getActionQueryString, d as ACTION_QUERY_PARAMS } from './shared_wP79bBFI.mjs';
import * as z from 'zod';
import { z as z$1 } from 'zod';
import { A as AstroError, h as ActionCalledFromServerError } from './astro/assets-service_CI-QSHFT.mjs';

async function sendEmail(props) {
  let transporter = nodemailer.createTransport({
    host: undefined                          ,
    port: Number(undefined                          ),
    auth: {
      user: undefined                     ,
      pass: undefined                          
    }
  });
  const { email, name, msg } = props;
  let message = {
    from: undefined                     ,
    to: [undefined                     , props.email],
    subject: "PORTFOLIO ",
    name: props.name,
    html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Package Booking Confirmation</title>
    <style>
     body {
    font-family: Arial, sans-serif;
    color: #333333;
    background-color: #f9f9f9;
    margin: 0;
    padding: 0;
}
.email-container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background-color: #ffffff;
    border: 1px solid #dddddd;
    border-radius: 8px;
}
.header {
    text-align: center;
    padding: 20px 0;
}
.header h1 {
    color: #FFA500; /* Dark orange */
    margin: 0;
}
.package-info {
    background-color: #FFE4B5; /* Light yellowish orange */
    padding: 15px;
    border-radius: 6px;
    margin: 20px 0;
}
.package-info h2 {
    color: #FFA500; /* Dark orange */
    margin: 0;
    font-size: 18px;
}
.package-details {
    margin: 10px 0;
    padding: 0 10px;
}
.package-details p {
    margin: 5px 0;
    font-size: 14px;
}
.footer {
    text-align: center;
    padding: 20px 0;
    font-size: 12px;
    color: #666666;
}
.footer a {
    color: #FFA500; /* Dark orange */
    text-decoration: none;
}

    </style>
</head>
<body>
    <div class="email-container">
        <!-- Header Section -->
        <div class="header">
            <h1>Thank You for Time and Trust in us</h1>
            <p>We're excited to have you join us on this adventure!</p>
        </div>

        <!-- Package Info Section -->
        <div class="package-info">
            <h2>Booking Details</h2>
            <div class="package-details">
                <p><strong>Package:</strong> ${name}</p>
                <p><strong>Duration:</strong> ${email}</p>
                <p><strong>Group Size:</strong> ${msg}</p>
            </div>
        </div>

        <!-- Instructions Section -->
        <p>Here’s what happens next:</p>
        <ul>
            <li>A team member will be in touch to confirm your time availbility and provide additional details.</li>
            <li>If you have any questions, feel free to reply to this email or contact us at our support number.</li>
        </ul>

        <p>We look forward to providing you with an unforgettable experience!</p>

        <!-- Footer Section -->
        <div class="footer">
            <p>&copy;  2024 HK. All rights reserved.</p>
            <p><a href="mailto:khandayharoon@gmail.com">khandayharoon.com</a> | <a href="tel:+91 6005204853">+91 6005 204 853</a></p>
        </div>
    </div>
</body>
</html>`
  };
  let info = await transporter.sendMail(message);
  return info;
}

function defineAction({
  accept,
  input: inputSchema,
  handler
}) {
  const serverHandler = accept === "form" ? getFormServerHandler(handler, inputSchema) : getJsonServerHandler(handler, inputSchema);
  async function safeServerHandler(unparsedInput) {
    if (typeof this === "function") {
      throw new AstroError(ActionCalledFromServerError);
    }
    return callSafely(() => serverHandler(unparsedInput, this));
  }
  Object.assign(safeServerHandler, {
    orThrow(unparsedInput) {
      if (typeof this === "function") {
        throw new AstroError(ActionCalledFromServerError);
      }
      return serverHandler(unparsedInput, this);
    }
  });
  return safeServerHandler;
}
function getFormServerHandler(handler, inputSchema) {
  return async (unparsedInput, context) => {
    if (!(unparsedInput instanceof FormData)) {
      throw new ActionError({
        code: "UNSUPPORTED_MEDIA_TYPE",
        message: "This action only accepts FormData."
      });
    }
    if (!inputSchema) return await handler(unparsedInput, context);
    const baseSchema = unwrapBaseObjectSchema(inputSchema, unparsedInput);
    const parsed = await inputSchema.safeParseAsync(
      baseSchema instanceof z$1.ZodObject ? formDataToObject(unparsedInput, baseSchema) : unparsedInput
    );
    if (!parsed.success) {
      throw new ActionInputError(parsed.error.issues);
    }
    return await handler(parsed.data, context);
  };
}
function getJsonServerHandler(handler, inputSchema) {
  return async (unparsedInput, context) => {
    if (unparsedInput instanceof FormData) {
      throw new ActionError({
        code: "UNSUPPORTED_MEDIA_TYPE",
        message: "This action only accepts JSON."
      });
    }
    if (!inputSchema) return await handler(unparsedInput, context);
    const parsed = await inputSchema.safeParseAsync(unparsedInput);
    if (!parsed.success) {
      throw new ActionInputError(parsed.error.issues);
    }
    return await handler(parsed.data, context);
  };
}
function formDataToObject(formData, schema) {
  const obj = schema._def.unknownKeys === "passthrough" ? Object.fromEntries(formData.entries()) : {};
  for (const [key, baseValidator] of Object.entries(schema.shape)) {
    let validator = baseValidator;
    while (validator instanceof z$1.ZodOptional || validator instanceof z$1.ZodNullable || validator instanceof z$1.ZodDefault) {
      if (validator instanceof z$1.ZodDefault && !formData.has(key)) {
        obj[key] = validator._def.defaultValue();
      }
      validator = validator._def.innerType;
    }
    if (!formData.has(key) && key in obj) {
      continue;
    } else if (validator instanceof z$1.ZodBoolean) {
      const val = formData.get(key);
      obj[key] = val === "true" ? true : val === "false" ? false : formData.has(key);
    } else if (validator instanceof z$1.ZodArray) {
      obj[key] = handleFormDataGetAll(key, formData, validator);
    } else {
      obj[key] = handleFormDataGet(key, formData, validator, baseValidator);
    }
  }
  return obj;
}
function handleFormDataGetAll(key, formData, validator) {
  const entries = Array.from(formData.getAll(key));
  const elementValidator = validator._def.type;
  if (elementValidator instanceof z$1.ZodNumber) {
    return entries.map(Number);
  } else if (elementValidator instanceof z$1.ZodBoolean) {
    return entries.map(Boolean);
  }
  return entries;
}
function handleFormDataGet(key, formData, validator, baseValidator) {
  const value = formData.get(key);
  if (!value) {
    return baseValidator instanceof z$1.ZodOptional ? void 0 : null;
  }
  return validator instanceof z$1.ZodNumber ? Number(value) : value;
}
function unwrapBaseObjectSchema(schema, unparsedInput) {
  while (schema instanceof z$1.ZodEffects || schema instanceof z$1.ZodPipeline) {
    if (schema instanceof z$1.ZodEffects) {
      schema = schema._def.schema;
    }
    if (schema instanceof z$1.ZodPipeline) {
      schema = schema._def.in;
    }
  }
  if (schema instanceof z$1.ZodDiscriminatedUnion) {
    const typeKey = schema._def.discriminator;
    const typeValue = unparsedInput.get(typeKey);
    if (typeof typeValue !== "string") return schema;
    const objSchema = schema._def.optionsMap.get(typeValue);
    if (!objSchema) return schema;
    return objSchema;
  }
  return schema;
}

const ENCODED_DOT = "%2E";
function toActionProxy(actionCallback = {}, aggregatedPath = "") {
  return new Proxy(actionCallback, {
    get(target, objKey) {
      if (objKey in target || typeof objKey === "symbol") {
        return target[objKey];
      }
      const path = aggregatedPath + encodeURIComponent(objKey.toString()).replaceAll(".", ENCODED_DOT);
      function action(param) {
        return handleAction(param, path, this);
      }
      Object.assign(action, {
        queryString: getActionQueryString(path),
        toString: () => action.queryString,
        // Progressive enhancement info for React.
        $$FORM_ACTION: function() {
          const searchParams = new URLSearchParams(action.toString());
          searchParams.set(ACTION_QUERY_PARAMS.actionRedirect, "false");
          return {
            method: "POST",
            // `name` creates a hidden input.
            // It's unused by Astro, but we can't turn this off.
            // At least use a name that won't conflict with a user's formData.
            name: "_astroAction",
            action: "?" + searchParams.toString()
          };
        },
        // Note: `orThrow` does not have progressive enhancement info.
        // If you want to throw exceptions,
        //  you must handle those exceptions with client JS.
        async orThrow(param) {
          const { data, error } = await handleAction(param, path, this);
          if (error) throw error;
          return data;
        }
      });
      return toActionProxy(action, path + ".");
    }
  });
}
async function handleAction(param, path, context) {
  {
    const { getAction } = await import('./get-action_C6W_ma49.mjs').then(n => n.a);
    const action = await getAction(path);
    if (!action) throw new Error(`Action not found: ${path}`);
    return action.bind(context)(param);
  }
}
toActionProxy();

const server = {
  contact: defineAction({
    accept: "form",
    input: z.object({
      name: z.string(),
      email: z.string().email(),
      msg: z.string()
    }),
    handler: async (input, context) => {
      await sendEmail(input);
      return `Hello, ${input.name}!`;
    }
  })
};

export { server };
