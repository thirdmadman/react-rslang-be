const { OK } = require('http-status-codes');
const router = require('express').Router();
const userService = require('./user.service');
const { id, user } = require('../../utils/validation/sсhemas');
const {
  validator,
  userIdValidator
} = require('../../utils/validation/validator');

router.post('/', validator(user, 'body'), async (req, res) => {
  const userEntity = await userService.save(req.body);
  res.status(OK).send(userEntity.toResponse());
});

router.get(
  '/:id',
  userIdValidator,
  validator(id, 'params'),
  async (req, res) => {
    const userEntity = await userService.get(req.params.id);
    res.status(OK).send(userEntity.toResponse());
  }
);

router.put('/:id', userIdValidator, async (req, res) => {
  const userEntity = await userService.update(req.userId, req.body);
  res.status(OK).send(userEntity.toResponse());
});

module.exports = router;
