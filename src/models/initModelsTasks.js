import Category from "./categories.model.js";
import Task from "./tasks.model.js";
import User from "./users.model.js";

const initModels = () => {
    User.hasMany(Task, { foreingKey: 'userId'});
    Task.belongsTo(User, { foreignKey: 'userId'});
    Category.belongsToMany(Task, { through: 'CategoriesTasks' });
    Task.belongsToMany(Category, { through: 'CategoriesTasks' });
};

export default initModels;