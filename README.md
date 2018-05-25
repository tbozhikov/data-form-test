# data-form-test
A project reproducing a bug in {N} RadDataForm

Steps to reproduce (iOS, but it is the same on Android):

1. Start app
2. Click Login button (validation kicks in and shows errors)
3. Click Register (navigates to Register page)
4. Go back
5. Fill in working credentials and click Login button
Result: cannot login because dataForm.hasValidationErrors() still returns that there are errors and the page navigation is not triggered
