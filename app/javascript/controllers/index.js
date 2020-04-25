// Load all the controllers within this directory and all subdirectories. 
// Controller files must be named *_controller.js.

import { Application } from "stimulus"
import { definitionsFromContext } from "stimulus/webpack-helpers"
import StimulusReflex from 'stimulus_reflex'

const application = Application.start()
const context = require.context("controllers", true, /_controller\.js$/)
application.load(definitionsFromContext(context))
StimulusReflex.initialize(application)

// Imports for T-S-C
// Options include Dropdown, Modal, Tabs, Popover, Toggle 
import { Modal } from "tailwindcss-stimulus-components"
application.register('modal', Modal)
