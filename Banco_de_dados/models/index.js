import { User } from "./user.js";
import { Exercise } from "./exercise.js";
import { Exercise_User } from "./exercise_user.js";
import { User_Training } from "./user_training.js";
import { User_Training_Session } from "./user-training-session.js";
import { User_Training_Session_Exercise } from "./user-training-session-exercises.js";

User.hasMany(Exercise_User, { foreignKey: "UserId" });
User.hasMany(User_Training, { foreignKey: "UserId" });
User.hasMany(User_Training_Session, { foreignKey: "UserId" });
Exercise.hasMany(Exercise_User, { foreignKey: "ExerciseId" });

Exercise_User.belongsTo(User, { foreignKey: "UserId" });
Exercise_User.belongsTo(Exercise, { foreignKey: "ExerciseId" });
Exercise_User.belongsToMany(User_Training, {
  through: "Pi_User_Training_Exercise",
  as: "User_Trainings",
});
Exercise_User.belongsToMany(User_Training_Session, {
  through: User_Training_Session_Exercise,
});

User_Training.belongsTo(User, { foreignKey: "UserId" });
User_Training.belongsToMany(Exercise_User, {
  through: "Pi_User_Training_Exercise",
  as: "Exercise_Users",
});
User_Training.hasMany(User_Training_Session, { foreignKey: "UserTrainingId" });

User_Training_Session.belongsTo(User, { foreignKey: "UserId" });
User_Training_Session.belongsTo(User_Training, { foreignKey: "UserTrainingId" });
User_Training_Session.belongsToMany(Exercise_User, {
  through: User_Training_Session_Exercise,
  as: "Exercise_Users"
});


export { User, Exercise, Exercise_User, User_Training, User_Training_Session, User_Training_Session_Exercise };
