const { OK } = require('http-status-codes');
const router = require('express').Router({ mergeParams: true });
const settingService = require('./setting.service');

router.route('/').get(async (req, res) => {
  const setting = await settingService.get(req.userId);
  res.status(OK).send(setting.toResponse());
});

router.route('/').put(async (req, res) => {
  const setting = await settingService.upsert(req.userId, req.body);
  res.status(OK).send(setting.toResponse());
});

module.exports = router;
