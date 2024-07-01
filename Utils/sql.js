export const getExUser = "SELECT * FROM userCrud WHERE `email` = ?";

export const create = "INSERT INTO userCrud (`firstName`, `lastName`, `email`) VALUES (?, ?, ?)";

export const get = "SELECT * FROM userCrud";

export const getExuserById = "SELECT * FROM userCrud WHERE `id` = ?";

export const deleteById = "DELETE FROM userCrud WHERE `id` = ?";

export const updateById = "UPDATE userCrud SET `firstName` = ?, `lastName` = ?, `email` = ? WHERE id=?";