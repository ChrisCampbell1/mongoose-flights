known issues:
data massaging for update isn't triggering the default date - might need to use .toISOString()
when manually setting a date, something weird is happening with timezones, coming up a day early - resolved with local date time
