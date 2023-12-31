export enum httpStatusCode {
  OK = 200,
  CREATED = 201,
  REDIRECTED = 301,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  RESOURCE_NOT_FOUND = 404,
  CONFLICTS = 409,
  INTERNAL_SERVER_ERROR = 500,
}

export enum nodeEnvironmentTypes {
  DEVELOPEMENT = "development",
  PRDUCTION = "prod",
}

export enum responseMessage {
  SUCCESS = "success",
  FAILED = "failed",
  FORM_CREATED = "Form Created Successfully",
  FORM_DELETED = "Form Deleted Successfully",
  FORM_NOT_FOUND = "Form Not Found",
  REGISTER_SUCCESS = "You are registered successfully",
  LOGIN_SUCCESS = "You are logged in successfully",
  UNAUTHORIZED = "Unauthorized User!",
  USER_NOT_FOUND = "User Not Found!",
  USER_ALREADY_EXIST = "User Already Exists!",
  SOMETHING_WENT_WRONG = "Something went wrong",
  ITEM_NOT_FOUND = "Item Not Found",
  DELETED_SUCCESS = "Deleted successfully",
  SUBSCRIBED = "Subscribed successfully",
  SUBSCRIBED_ALEREADY = "You are already subscribed",
  UNSUBSCRIBED = "unsubscribed successfully",
  MESSAGE_SEND_SUCCESS = "Message Sent Successfully",
  PROJECT_ADDED_SUUCESS = "Project Added Successfully",
  INVALID_EMAIL_PASSWORD = "Invalid Email Password",
  CONTACT_UPDATED = "Contact Updated Successfully",
  FORM_SAVED = "Form Saved Successfully",
}
