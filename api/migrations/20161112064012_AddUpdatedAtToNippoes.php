<?php

use Phpmig\Migration\Migration;

class AddUpdatedAtToNippoes extends Migration
{
    /**
     * Do the migration
     */
    public function up()
    {
        $container = $this->getContainer();
        $container['db']->query("ALTER TABLE nippoes ADD updated_at timestamp DEFAULT CURRENT_TIMESTAMP();");
    }

    /**
     * Undo the migration
     */
    public function down()
    {
        $container = $this->getContainer();
        $container['db']->query("ALTER TABLE nippoes drop updated_at;");
    }
}
