# Check for src/ module
ifeq ($(wildcard $(d)src/index.html),) # If src/ module does not exist
  # Download src/ module
  include exec.mk
  $(call exec,git clone https://github.com/jlapolla/h4-slide-content.git $(d)src,Failed to download "$(d)src/" module)
endif # End check for src/ module

define $(d)template
include helpdoc.mk

.DEFAULT_GOAL := help
endef

$(eval $($(d)template))
$(eval $(d)template :=)
